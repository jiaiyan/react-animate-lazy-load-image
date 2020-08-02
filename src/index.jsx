import React, { useState, useEffect, useRef } from "react";

// 在SSR时不引入
if (typeof window !== "undefined") {
  require("./styles.css");
}

/**
 * React图片懒加载组件
 */
function ReatLazyLoadImage(props) {
  const [enter, setEnter] = useState(null);
  const [exit, setExit] = useState(null);
  const [src, setSrc] = useState(null);
  const [hidePlaceholde, setHidePlaceholde] = useState(false);
  const loadImage = useRef(null);

  if (typeof IntersectionObserver !== "undefined") {
    const intersectionObserver = new IntersectionObserver((entries) => {
      // 元素是否进入可视区
      if (entries[0].isIntersecting) {
        const imgEl = document.createElement("img");
        imgEl.src = props.src;
        imgEl.onload = () => {
          !setSrc(props.src) && setEnter(props.enter);
          if (!props.enter) setHidePlaceholde(true);
        };
        // 取消监听元素
        intersectionObserver.unobserve(entries[0].target);
        // 关闭监视器
        intersectionObserver.disconnect();
      }
    });

    useEffect(() => {
      // 添加监听元素
      if (!src) intersectionObserver.observe(loadImage.current);
    });
  }

  return (
    <div
      className="react-lazy-load-image"
      style={props.style}
      ref={loadImage}
      title={props.title}
    >
      {!hidePlaceholde && (
        <img
          className={exit}
          onAnimationEnd={() => setHidePlaceholde(true)}
          src={props.placeholde}
          alt="placeholde"
        />
      )}
      {src && (
        <img
          className={enter}
          onLoad={() => setExit(props.exit)}
          src={src}
          style={{ objectFit: props.mode || 'fill' }}
          alt={props.alt}
        />
      )}
    </div>
  );
}

export default ReatLazyLoadImage;
