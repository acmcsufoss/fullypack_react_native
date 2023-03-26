import { Redirect } from "expo-router";

// Redirect to /home when app first load
export default function Index() {
  return <Redirect href="/home" />;
}
