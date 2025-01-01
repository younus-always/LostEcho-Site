import Lottie from 'lottie-react'
import spinner from '../lotties/loading-spinner.json'
const Loading = () => {
      return (
            <div className='flex items-center justify-center py-20'>
                  <Lottie animationData={spinner} className='w-20'></Lottie>
            </div>
      )
}

export default Loading