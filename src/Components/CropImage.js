import React from "react";
import PropTypes from "prop-types";
import AvatarEditor from 'react-avatar-editor';

const CropImage = ({ imageSrc, onCrop, setEditorRef, scaleValue, onScaleChange}) => (
    <div>
        <AvatarEditor image={imageSrc} border={75} borderRadius={100} scale={scaleValue} rotate={0} ref={setEditorRef} />
        <input style={{ width: '100%'}} type="range" value={scaleValue} name="points" min="1" max="15" onChange={onScaleChange} />
        {/* <input style={{ width: '100%'}} type="range" value={scaleValue} name="points" min="1" max="15" onChange={onScaleChange} /> */}

        <button onClick={onCrop}>Crop Image</button>
    </div>
);

CropImage.propTypes = {
    open: PropTypes.bool.isRequired,
    setEditorRef: PropTypes.func.isRequired,
    onCrop: PropTypes.func.isRequired,
    scaleValue: PropTypes.number.isRequired,
    onScaleChange: PropTypes.func.isRequired,
};

export default CropImage;