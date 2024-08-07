type Props = {
  bootstrapIcon: string;
};

function MovieNavigationButton(props: Props) {
  return (
    <>
      <button className="text-white text-center w-full h-full">
        <i className={`${props.bootstrapIcon} text-9xl`}></i>
      </button>
    </>
  );
}

export default MovieNavigationButton;
