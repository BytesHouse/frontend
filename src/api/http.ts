import axios from "axios";

// create instance
export const $api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
});

// Функция для обновления accessToken с помощью refreshToken
const refreshToken = async () => {
  const refreshToken = localStorage.getItem("refreshToken");
  const response = await $api.post("/refresh", {
    token: refreshToken,
  });
  localStorage.setItem("accessToken", response.data.accessToken);
  return response.data.accessToken;
};

// Интерцептор запроса для добавления accessToken к каждому запросу
$api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Интерцептор ответа для обработки ошибок аутентификации и обновления токена
$api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      const newAccessToken = await refreshToken();
      axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${newAccessToken}`;
      return $api(originalRequest); /// ???
    }
    return Promise.reject(error);
  }
);
