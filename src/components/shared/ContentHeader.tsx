type Props = {
  title: string
}

function ContentHeader(props: Props) {
  return (
    <h1 className="text-2xl font-bold mt-5 mb-2 lg:text-3xl lg:mt-2 lg:mb-1" style={{ color: "#999999" }}>
          {props.title}
    </h1>
  )
}

export default ContentHeader