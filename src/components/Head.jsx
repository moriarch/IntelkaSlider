import Sceleton from "./Sceleton";

const Head = ({ loading, state }) => {
  return (
    <>
    <div className="row align-items-center titleBlock">
      <div className="col">
        {loading ? (
          <div className="m-0"><Sceleton height={"33px"} /></div>
        ) : (
          <h2 className="m-0">{state?.title}</h2>
        )}
      </div>
      {loading ? (
         <div className="col-md text-md-right"><Sceleton height={"33px"} /> </div>
      ): state?.url_name && (
        <div className="col-md text-md-right">
            <a href={state?.url} className="withArrow">
                {state?.url_name}
            </a>
        </div>
      )}  
    </div>
      <DownloadList state={state}/>
    </>
  );
};


const DownloadList = ({state}) => {
  if (state?.download)
    return (
      <div className="mt-20 text-right">
        <a href={state?.download} target="_blank" download="Список товаров в пути на склад" className="btn transBtn">
          <img src="/local/templates/intelka/img/xlsx.svg" alt="" className="mr-5" />
          Скачать список
        </a>
      </div>
    )

    return null
}

export default Head;

