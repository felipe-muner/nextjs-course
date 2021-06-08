import LoginComp from "../components/Login";

export default function Login() {
  return <LoginComp />;
}

Login.getInitialProps = async ({ req }) => {
  let token;
  if (req) {
    // server
    return { page: {} };
  } else {
    // client
    const token = localStorage.getItem("auth");
    console.log(token, 1010);
    const res = await fetch(`${process.env.API_URL}/pages/about`, {
      headers: { Authorization: token },
    });
    const data = await res.json();
    return { page: data };
  }
};
