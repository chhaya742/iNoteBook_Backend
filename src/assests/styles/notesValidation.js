
export const notesValidat = (notesInput) => {
    const {Title}=notesInput
    const error = {};
    let isError = false ;

    if(!Title){
        error.Title="Title is requiered";
        isError=true;
    }
    error.isError=isError;
    return error;
}
