import Typewriter from 'typewriter-effect';
import { Profile } from '../../store/slice/Profile/profileSlice';
import { useAppSelector } from '../../store/store';

interface Texts {
  text1: string,
  text2: string,
  twoText: boolean,
}

const TextTypeWriter = ({ text1, text2, twoText }: Texts) => {

  console.log(text1, text2);

  const profile: Profile = useAppSelector(state => state.profile)
  console.log('profile: ', profile);


  return (
    <div>
      <h1 className="display-5">
        {
          twoText ?
            <Typewriter
              options={{ loop: true }}
              onInit={(writer) => {
                writer.typeString(profile?.name || 'sasasd')
                  .pauseFor(1000)
                  .deleteAll()
                  .typeString(profile.descriptions)
                  .start()
              }}
            />
            :
            <Typewriter
              onInit={(writer) => {
                writer.typeString(profile?.descriptions || 'zadf')
                  .pauseFor(1000)
                  .start()
              }}
            />
        }
      </h1>
    </div>
  )
}

export default TextTypeWriter