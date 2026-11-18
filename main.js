import { UserManager } from "oidc-client-ts";

const cognitoAuthConfig = {
  authority: "https://cognito-idp.us-east-1.amazonaws.com/us-east-1_D9PrEKaT1",
  client_id: "1d3baeppil13mghc1t47noi9pc",
  redirect_uri: "http://127.0.0.1:5500/handle-signin.html",
  response_type: "code",
  scope: "email openid phone",
};

// create a UserManager instance
export const userManager = new UserManager({
  ...cognitoAuthConfig,
});

export async function signOutRedirect() {
  const clientId = "1d3baeppil13mghc1t47noi9pc";
  const logoutUri = "<logout uri>";
  const cognitoDomain =
    "https://us-east-1d9prekat1.auth.us-east-1.amazoncognito.com";
  window.location.href = `${cognitoDomain}/logout?client_id=${clientId}&logout_uri=${encodeURIComponent(logoutUri)}`;
}
