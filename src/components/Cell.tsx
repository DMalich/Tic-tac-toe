type Player = "X" | "O" | "TIE" | null;

function Cell({
    value,
    onClick,
    winner,
}: {
    value: Player;
    onClick: () => void;
    winner: Player;
}) {
    if (!value) {
        return (
            <button
                className="cell"
                onClick={onClick}
                disabled={Boolean(winner)}
            />
        );
    }
    return (
        <div>
            <button
                className={`cell cell_${value.toLocaleLowerCase()}`}
                disabled
            >
                {value}
            </button>
        </div>
    );
}

export default Cell;
