// đổi mật khẩu
export const getHistory = async (
  dataUsers: any,
  dataQuestion: any,
  selectedAnswers: any
) => {
  try {
    console.log(dataQuestion);

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/history-exam`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.NEXT_API_KEY_TOKEN}`,
        },
        body: JSON.stringify({
          data: {
            msv: dataUsers.information_user.mav,
            username: dataUsers.username,
            subject: dataQuestion.subject,
            class: dataUsers.information_user.class,
            namelecturer: dataQuestion.lecturer,
            mgv: dataQuestion.magv,
            answer: selectedAnswers,
          },
        }),
      }
    );
    console.log(dataQuestion.subject);

    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
