import { FiDownload } from "react-icons/fi";
import Button from "./Button";

export default function CvDownloadBar({
  href = "",
  downloadName = "Alex-Morgan-CV.pdf",
  buttonLabel = "Download CV",
  className = "",
}) {
  const isEnabled = Boolean(href);

  return (
    <div className={`flex flex-wrap items-center gap-4 ${className}`.trim()}>
      <Button
        {...(isEnabled
          ? {
              href,
              download: downloadName,
              target: "_blank",
              rel: "noreferrer",
            }
          : { type: "button", disabled: true, "aria-disabled": true })}
        variant="secondary"
        size="lg"
        shape="pill"
        icon={
          <FiDownload className="h-4 w-4 text-primary" aria-hidden="true" />
        }
      >
        {buttonLabel}
      </Button>
    </div>
  );
}
