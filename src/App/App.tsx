import {Button, CheckedButton, GenericModalBase, Select} from "../../lib/main";

const App = () => {
    return (
        <div>
            <Button >Hello</Button>
            <Select options={['hello', 'cool', 'fire']}
                    selectedOption={'hello'}
                    onClick={()=>{}}
            />
            <CheckedButton  onClick={()=> {}} >check me</CheckedButton>
            <CheckedButton isActive={true} variant={'accept'} onClick={()=> {}} >check me</CheckedButton>

            <GenericModalBase handleClose={()=>{}} isOpen={false}>
            dank
            </GenericModalBase>
        </div>
    );
};

export default App;