import Switch from '@mui/material/Switch';
import { useRecoilState } from 'recoil';
import { darkModeState } from '../../main'


export default function DarkModeSwitch() {
  const [DarkMState, setDarkMState] = useRecoilState(darkModeState);
  function setDarkMode() {
    setDarkMState(!DarkMState);
    console.log('Darkmode is: '+DarkMState)

  } 
  
  return (
    <Switch defaultChecked onChange={setDarkMode}/>
  );
}