import { toast } from "react-toastify";

export const requestLoginStudent = async (email: string, password: string) => {
  toast.dismiss();
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/auth/local`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          identifier: email,
          password: password,
        }),
      }
    );

    const data = await response.json();
    if (data.jwt) {
      toast.success("Đăng nhập thành công");
    } else {
      toast.error("Đăng nhập thất bại");
    }
    console.log(data);
    return data;
  } catch (error) {
    console.error("Error parsing JSON:", error);
    throw new Error("Failed to parse response data");
  }
};
