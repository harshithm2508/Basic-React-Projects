import { useState } from "react";

interface OptionFieldProps {
    title: string;
    isSelected: boolean;
    onSelect: () => void;
}

function OptionsField() {
    const [choice, setChoice] = useState<string>('');

    const handleSelect = (title: string) => {
        setChoice(title);
    };

    return (
        <div>
        <OptionField
            title="Repayment"
            isSelected={choice === "Repayment"}
            onSelect={() => handleSelect("Repayment")}
        />
        <OptionField
            title="Interest Only"
            isSelected={choice === "Interest Only"}
            onSelect={() => handleSelect("Interest Only")}
        />
        </div>
    );
}

function OptionField({ title, isSelected, onSelect }: OptionFieldProps) {
    return (
    <div
        className={`flex gap-2 border-2 p-2 rounded-md mb-2 ${
            isSelected ? 'border-lime-400 bg-lime-50' : 'hover:border-lime-400 hover:bg-lime-50'
        }`}
        onClick={onSelect}
        >
        <input type="radio" checked={isSelected} readOnly />
        <div>{title}</div>
    </div>
    );
}

export default OptionsField;
