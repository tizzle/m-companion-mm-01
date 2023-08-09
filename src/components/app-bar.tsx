import BarsIcon from "../icons/icon-bars";
import CardIcon from "../icons/icon-card";
import HomeIconFilled from "../icons/icon-home-filled";
import PromotionsIcon from "../icons/icon-promotions";
import ShoppingListIcon from "../icons/icon-shopping-list";

const AppBar = () => {
  return (
    <div className="static z-[999999999] flex flex-shrink-0 h-12 bg-white border-t border-grey-tint-80 text-grey">
      <div className="flex flex-col items-center justify-center flex-grow -space-y-1 text-darkBlue">
        <HomeIconFilled className="w-8 h-8" />
        <span className="text-xxs">Marktsuche</span>
      </div>
      <div className="flex flex-col items-center justify-center flex-grow -space-y-0.5">
        <PromotionsIcon className="w-8 h-8" />
        <span className="text-xxs">Promotions</span>
      </div>
      <div className="flex flex-col items-center justify-center flex-grow -space-y-0.5">
        <ShoppingListIcon className="w-8 h-8" />
        <span className="text-xxs">Einkaufsliste</span>
      </div>
      <div className="flex flex-col items-center justify-center flex-grow -space-y-0.5">
        <CardIcon className="w-8 h-8" />
        <span className="text-xxs">METRO Karte</span>
      </div>
      <div className="flex flex-col items-center justify-center flex-grow -space-y-0.5">
        <BarsIcon className="w-8 h-8" />
        <span className="text-xxs">Mehr</span>
      </div>
    </div>
  );
};

export default AppBar;
