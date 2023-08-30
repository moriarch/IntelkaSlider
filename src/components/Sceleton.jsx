import {sceleton} from '../styles.module.css'

const Sceleton = ({ height = "100%", width = "100%", className, style={} }) => {
  return (
    <div
      className={[sceleton,className].join(' ')}
      
      style={{
        height,
        width,
        ...style
      }}
    ></div>
  );
};

export default Sceleton;
