import {Button, CheckedButton, FloatingLabelInputWithButton, GenericModalBase, Select} from "../../lib/main";

const App = () => {
    const noop = ()=>{}
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
            <FloatingLabelInputWithButton onClick={noop} label={'hmm'} value={'hmm'}/>
            <FloatingLabelInputWithButton onClick={noop} label={'hmm'} value={'hmm'} style={{width: '30rem'}}/>
        </div>
    );
};

export default App;