export default function TextEditor({ text, onChange, onComplete }) {
    return (
        <div>
            <input
                autoFocus
                value={text}
                onChange={onChange}
                onBlur={onComplete}
                onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                        onComplete();
                    }
                }}
            />
        </div>
    );
}