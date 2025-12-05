import { useState } from 'react';

export default function Counter({ total, onClick }: { total: number, onClick: () => void }) {
    const [count, setCount] = useState(0);
    return (
        <div className="counter-item">
                <h1>{count} / {total}</h1>
                {/* 
                  버튼 정렬 스타일을 counter-item에 app.css에서 처리하도록 변경했습니다.
                  버튼에는 별도의 정렬 스타일을 넣지 않았습니다.
                */}
                <button
                    onClick={() => {
                        setCount((prev) => prev + 1);
                        onClick();
                    }}
                    style={{ marginTop: "1rem" }}
                >
                    증가!!
                </button>
        </div>
    );
}