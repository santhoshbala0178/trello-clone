import React, { useEffect, useRef } from "react";
import { connect, ConnectedProps, useDispatch } from "react-redux";
import { CREATE_POPUP } from "../../../constants/actionTypes";
import { RootState } from "../../../store";
import CreateButton from "./BannerCreateButton.style";
import popupStateAction from "../../../actions/popupStateAction";
import CreatePopup from "../../Popup/CreatePopup/CreatePopup";

const mapStateToProps = (state: RootState) => ({
  popupStateReducer: state.popupStateReducer,
});

const mapDispatchToProps = {
  popupStateActionProp: popupStateAction,
};

const connector = connect(mapStateToProps, mapDispatchToProps);

type Props = ConnectedProps<typeof connector>;

const BannerCreateButton: React.FC<Props> = ({
  popupStateReducer,
  popupStateActionProp,
}) => {
  const dispatch = useDispatch();
  const modalRef = useRef<HTMLDivElement | null>(null);

  const onCreate = () => {
    dispatch(
      popupStateActionProp(CREATE_POPUP, !popupStateReducer.createPopup)
    );
  };

  useEffect(() => {
    const handleClick = (e: any) => {
      if (!modalRef.current?.contains(e.target)) {
        dispatch(popupStateActionProp(CREATE_POPUP, false));
      }
    };

    window.addEventListener("click", handleClick);

    return () => window.removeEventListener("click", handleClick);
  }, []);

  return (
    <div ref={modalRef}>
      <CreateButton onClick={onCreate}>Create</CreateButton>
      {popupStateReducer.createPopup && <CreatePopup />}
    </div>
  );
};

export default connector(BannerCreateButton);
