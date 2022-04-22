import { AppConfig } from '../utils/AppConfig';

/* type ILogoProps = {
  xl?: boolean;
}; */

const Logo = () => {
  const fontStyle = 'font-semibold text-3xl';

  return (
    <span className={`text-gray-900 inline-flex items-center ${fontStyle}`}>
      <img
        src="/assets/images/DMCLOGOOsmallest-removebg-preview-new.png"
        alt="DMC"
      />

      {AppConfig.site_name}
    </span>
  );
};

export { Logo };
