import { useDispatch, useSelector } from "react-redux";
import { toggleShowNameAction } from "../../store/profile/actions";
import { profileSelector } from "../../store/profile/selectors";
import { GreenButton } from "../../components/Buttons";

function Profile() {
  const { name, showName } = useSelector(profileSelector);
  const dispatch = useDispatch();

  const handleToggleShowName = () => {
    dispatch(toggleShowNameAction());
  };

  return (
    <div className="wrap-main">
      <h1>Профиль</h1>
      <GreenButton onClick={handleToggleShowName}>Toggle show name</GreenButton>
      <div>{showName && name}</div>
    </div>
  );
}

export default Profile;
