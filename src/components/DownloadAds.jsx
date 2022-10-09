import React from "react";

const DownloadAds = () => {
    const downloadImgStyle="border-[2px] border-[#232A4E] rounded-[13px] h-[3rem] w-[10rem]"
  return (
    <div className="Download">
      <div className="download_images flex">
        <img className={`${downloadImgStyle} mr-[2rem]`} src={require("../img/App Store.png")} alt="" />
        <img className={downloadImgStyle} src={require("../img/Google Play.png")} alt="" />
      </div>
    </div>
  );
};

export default DownloadAds;
