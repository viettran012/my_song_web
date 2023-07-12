import { useSelector, useDispatch } from "react-redux";
import LoadingBar from "react-top-loading-bar";
import { RootState } from "../../redux/reducers";
import { memo } from "react";
import { setToploaderProgress } from "../../redux/actions/ui";

const TopLoader: React.FC = () => {
  // const dispatch = useDispatch();
  const progress = useSelector<RootState, number>(
    (state) => state.ui?.topLoaderProgress
  );
  return (
    <LoadingBar
      waitingTime={500}
      progress={progress}
      // onLoaderFinished={() => dispatch(setToploaderProgress(0))}
      color="var(--turquoise)"
    />
  );
};

export default memo(TopLoader);
