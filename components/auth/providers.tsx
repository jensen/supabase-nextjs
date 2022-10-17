import GithubButton from "components/auth/buttons/github";
import DiscordButton from "components/auth/buttons/discord";

export default function Providers() {
  return (
    <div className="flex flex-col space-y-2">
      <GithubButton />
      <DiscordButton />
    </div>
  );
}
