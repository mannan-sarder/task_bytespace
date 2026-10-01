import Image from "next/image";
import { SOCIAL_PROVIDERS } from "@/data/auth";

export function SocialSignIn({ disabled = false }: { disabled?: boolean }) {
  return (
    <div className="flex flex-col items-center gap-10">
      <div className="flex w-full items-center gap-[11px]" role="separator" aria-label="or">
        <Image
          src="/images/icons/divider-line.svg"
          alt=""
          width={200}
          height={1}
          className="h-px min-w-0 max-w-[200px] flex-1"
        />
        <span aria-hidden="true" className="text-body-l text-black-400">
          or
        </span>
        <Image
          src="/images/icons/divider-line.svg"
          alt=""
          width={200}
          height={1}
          className="h-px min-w-0 max-w-[200px] flex-1"
        />
      </div>
      <ul className="flex items-center gap-4">
        {SOCIAL_PROVIDERS.map((provider) => (
          <li key={provider.id}>
            <button
              type="button"
              aria-label={provider.label}
              disabled={disabled}
              className="grid size-[72px] place-items-center rounded-3xl border border-black-200 transition-colors duration-200 hover:bg-shuttle-gray-50 disabled:cursor-not-allowed disabled:opacity-60"
            >
              <Image src={provider.icon} alt="" width={40} height={40} />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
