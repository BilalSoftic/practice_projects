import { toast } from 'react-toastify';

function SingleColor({ color, index }) {
  const { hex, weight } = color;
  const saveToClipboard = async () => {
    if (navigator.clipboard) {
      try {
        navigator.clipboard.writeText(`#${hex}`);
        toast.success('Successfully copied to Clipboard');
      } catch (error) {
        toast.error('Failed to copy to Clipboard');
      }
    } else {
      toast.error('Clipboard access not available');
    }
  };
  return (
    <div
      className={index > 10 ? 'color color-light' : 'color'}
      style={{ background: `#${hex}` }}
      onClick={saveToClipboard}
    >
      <p className='percent-value'>{weight}%</p>
      <p className='color-value'>#{hex}</p>
    </div>
  );
}
export default SingleColor;
