import { Button } from "./button";
import GithubIcon from "./icons/github";
import GoogleIcon from "./icons/google";

export default function SocialButtons() {
  return (
    <div className="flex items-center gap-4">
      <Button variant={"outline"} className="gap-2 w-full" type="button">
        <GoogleIcon />
        <span className="font-semibold">Google</span>
      </Button>

      <Button variant={"outline"} className="gap-2 w-full" type="button">
        <GithubIcon />
        <span className="font-semibold">Github</span>
      </Button>
    </div>
  );
}
