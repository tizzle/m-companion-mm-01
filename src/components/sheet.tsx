import React from "react";
import Sheet, { SheetRef } from "react-modal-sheet";
import Article from "./article";

import image1 from "../assets/images/image-01.png";
import image2 from "../assets/images/image-02.png";
import image3 from "../assets/images/image-03.png";
import image4 from "../assets/images/image-04.png";

const stepTimeouts = [500, 2000, 3500];
const linkTarget = "_blank";

const SuggestionsSheet = () => {
  const sheetRef = React.useRef<SheetRef>();
  const articleRef = React.createRef<HTMLDivElement>();
  const articlesRef = React.createRef<HTMLDivElement>();

  const [canExpand, setCanExpand] = React.useState(true);

  const [isSheetOpen, setIsSheetOpen] = React.useState(false);
  const [snapPointThree, setSnapPointThree] = React.useState(215);
  const [snapPointFour, setSnapPointFour] = React.useState(512);
  const [animationDuration, setAnimationDuration] = React.useState(0.75);

  const [stepOneFinished, setStepOneFinished] = React.useState(false);
  const [stepTwoFinished, setStepTwoFinished] = React.useState(false);
  const [stepThreeFinished, setStepThreeFinished] = React.useState(false);

  const timeoutOne = React.useRef<number>();
  const timeoutTwo = React.useRef<number>();
  const timeoutThree = React.useRef<number>();

  const handleClose = () => {
    sheetRef.current?.snapTo(2);
  };

  const handleShowAllClick = () => {
    if (canExpand) {
      sheetRef.current?.snapTo(0);
      setCanExpand(false);
    } else {
      sheetRef.current?.snapTo(2);
      setCanExpand(true);
    }
  };

  React.useEffect(() => {
    console.log();
    setIsSheetOpen(true);

    if (articleRef.current) {
      setSnapPointThree(104 + articleRef.current.clientHeight);
    }

    if (articlesRef.current) {
      setSnapPointFour(48 + articlesRef.current.clientHeight);
    }

    if (!stepOneFinished) {
      timeoutOne.current = setTimeout(() => {
        sheetRef.current?.snapTo(1);
        setStepOneFinished(true);
      }, stepTimeouts[0]);
    }

    if (!stepTwoFinished) {
      timeoutTwo.current = setTimeout(() => {
        sheetRef.current?.snapTo(2);
        setStepTwoFinished(true);
      }, stepTimeouts[1]);
    }

    if (!stepThreeFinished) {
      timeoutThree.current = setTimeout(() => {
        setAnimationDuration(0.33);
        setStepThreeFinished(true);
      }, stepTimeouts[2]);
    }

    return () => {
      if (timeoutOne.current) {
        clearTimeout(timeoutOne.current);
      }
      if (timeoutTwo.current) {
        clearTimeout(timeoutTwo.current);
      }
      if (timeoutThree.current) {
        clearTimeout(timeoutThree.current);
      }
    };
  }, [
    articleRef,
    articlesRef,
    sheetRef,
    stepOneFinished,
    stepTwoFinished,
    stepThreeFinished,
  ]);

  const handleSnap = React.useCallback((index: number) => {
    // console.log("snap", index);
    if (index === 0) {
      setCanExpand(false);
    } else {
      setCanExpand(true);
    }
  }, []);

  return (
    <Sheet
      ref={sheetRef}
      isOpen={isSheetOpen}
      onClose={handleClose}
      onSnap={handleSnap}
      snapPoints={[snapPointFour, snapPointThree, 104, 0]}
      initialSnap={3}
      tweenConfig={{
        ease: "easeInOut",
        duration: animationDuration,
      }}
      className="max-w-[480px] w-full m-auto"
    >
      <Sheet.Container>
        <Sheet.Content>
          <div className="flex flex-col items-center py-2" ref={articlesRef}>
            <div className="h-1 rounded-full bg-grey-tint-90 w-9" />
            <div className="flex justify-between w-full px-4 py-3 text-14">
              <p className="flex-grow font-medium text-darkBlue">
                Buy from our online shop instead
              </p>
              <a
                className="cursor-pointer text-interaction"
                // href="https://www.metro.de/marktplatz/search?q=FritzBox"
                onClick={handleShowAllClick}
                // target={linkTarget}
              >
                {canExpand ? "Show" : "Hide"}
              </a>
            </div>
            <hr className="w-full border-t border-grey-tint-90" />
            <Article
              image={image1}
              title="AVM FRITZ!Box 4040 W-LAN Router"
              price="93,99 €"
              unit="1 Stück"
              priceVAT="111,85 € inkl. MwSt."
              link="https://www.metro.de/marktplatz/product/ca3334b6-9e5f-427a-980a-5741a211d5be"
              ref={articleRef}
              target={linkTarget}
            />
            <Article
              image={image2}
              title="AVM FRITZ!Box 6591 Cable"
              price="237,23 €"
              unit="1 Stück"
              priceVAT="282,30 € inkl. MwSt."
              link="https://www.metro.de/marktplatz/product/ba5e1186-4f52-42d8-b460-7c1550101dd1"
              target={linkTarget}
            />
            <Article
              image={image3}
              title="AVM FRITZ!Box 7590"
              price="202,02 €"
              unit="1 Stück"
              priceVAT="238,02 € inkl. MwSt."
              link="https://www.metro.de/marktplatz/product/a3efabae-66eb-428a-9e6e-9b89ff3354ea"
              target={linkTarget}
            />
            <Article
              image={image4}
              title="AVM FRITZ!Box 5530 WLAN-Router Gigabit Ethernet Dual-Band (2,4 GHz/5 GHz) Weiß"
              price="174,78 €"
              unit="1 Stück"
              priceVAT="207,99 € inkl. MwSt."
              link="https://www.metro.de/marktplatz/product/50abdbbb-730b-418a-9f05-184c164d4038"
              target={linkTarget}
              border={false}
            />
          </div>
        </Sheet.Content>
      </Sheet.Container>
    </Sheet>
  );
};

export default SuggestionsSheet;
