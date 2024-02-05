import { Loader } from "lucide-react";
import { Button, ButtonProps } from "./button";

interface Props extends ButtonProps {
  loading: boolean;
  loadingText?: string;
}

export default function LoadingButton({
  loading,
  loadingText,
  children,
  ...props
}: Props) {
  return (
    <Button disabled={loading} {...props}>
      {loading && <Loader className="h-4 w-4 animate-spin mr-2" />}
      {loading && loadingText ? loadingText : children}
    </Button>
  );
}
