import React from "react";
import LinkExternalIcon from "../icons/icon-link-external";

export interface ArticleProps {
  image: string;
  title: string;
  price: string;
  unit: string;
  priceVAT: string;
  link: string;
  border?: boolean;
  target?: string;
}

const Article = React.forwardRef<HTMLDivElement, ArticleProps>(
  (
    {
      image,
      title,
      price,
      unit,
      priceVAT,
      link,
      border = true,
      target = "_self",
    },
    ref
  ) => {
    return (
      <div ref={ref} className="w-full">
        <div className="flex items-center w-full p-3 space-x-3">
          <img src={image} className="flex-shrink-0 w-16 h-16" />
          <div className="flex-grow">
            <h3 className="text-15 text-darkBlue">{title}</h3>
            <div className="flex items-center space-x-3 text-15">
              <span className="font-semibold text-darkBlue">{price}</span>
              <div className="w-px h-3 bg-grey-tint-90"></div>
              <span className="text-grey">{unit}</span>
            </div>
            <p className="text-13 text-darkBlue">{priceVAT}</p>
          </div>
          <a href={link} className="flex-shrink-0" target={target}>
            <LinkExternalIcon className="w-5 h-5 text-interaction" />
          </a>
        </div>
        {border && <hr className="w-full border-t border-grey-tint-90" />}
      </div>
    );
  }
);

export default Article;
