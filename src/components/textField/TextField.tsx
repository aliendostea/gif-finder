import { forwardRef } from "react";
import style from "./TextField.module.scss";

interface TextfieldProps {
  id: string;
  name: string;
  type: string;
  placeholder: string;
}

const TextField = forwardRef(function TextField(
  props: TextfieldProps,
  ref: any
) {
  const { id, ...rest } = props;

  return (
    <div className={style["search-box"]}>
      <input ref={ref} {...rest} className={style["search"]} tabIndex={1} />

      <button className={style["search-btn"]} type="submit">
        Search
      </button>
    </div>
  );
});

export default TextField;
