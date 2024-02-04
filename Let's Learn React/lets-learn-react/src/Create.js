import React, { useEffect, useRef } from 'react';
import CharCountInput from './CharCountInput'

const Create = () => {
    const textareaRef = useRef(null);

    useEffect(() => {
        const textarea = textareaRef.current;

        const adjustTextareaHeight = () => {
            textarea.style.height = 'auto';
            textarea.style.height = (textarea.scrollHeight) + 'px';
        };

        textarea.addEventListener('input', adjustTextareaHeight);

        return () => {
            textarea.removeEventListener('input', adjustTextareaHeight);
        };
    }, []); // Empty dependency array ensures the effect runs only once after initial render

    return (
        <div className="Create">
            <h2 className="header-title">New Blog</h2>
            <form>
                <div className="form-container">
                    <div className="form-label">
                        <label>Title:</label>
                    </div>
                    
                    <CharCountInput />
                    
                </div>
                
                <div className="form-container">
                    <div className="form-label">
                        <label>Body:</label>
                    </div>

                    <div className="form-input">
                        <textarea className='text-area input-box' ref={textareaRef} id="text-area" placeholder="What's on your mind?"></textarea>
                    </div>
                    
                </div>
                
            </form>
        </div>
    );
}
 
export default Create;
