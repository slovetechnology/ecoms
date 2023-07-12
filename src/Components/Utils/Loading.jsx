import spinner from '../../assets/spinner.gif'
const Loading = ({title='Loading please wait!....'}) => {
  return (
    <div className='fixed top-0 left-0 w-[100vw] h-screen flex flex-col gap-3 items-center justify-center z-10 bg-white/60 bg-blend-color-burn'>
        <img src={spinner} alt="" className="w-20 opacity-70" />
        <div className="text-base text-slate-600 font-semibold animate-pulse">{title}</div>
    </div>
  )
}

export default Loading