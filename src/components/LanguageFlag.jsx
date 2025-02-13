import flags from "../data/flag";

export default function LanguageFlag({ language, country }) {
  const flagData = flags.find((flag) => language === flag.language);

  return (
    <>
      {flagData ? (
        <img
          className="flag"
          src={`https://purecatamphetamine.github.io/country-flag-icons/3x2/${
            flags.find((flag) => language === flag.language).country
          }.svg`}
          alt={language}
        />
      ) : (
        <img
          className="flag"
          src={`https://purecatamphetamine.github.io/country-flag-icons/3x2/${country}.svg`}
          alt={language}
        />
      )}
    </>
  );
}
