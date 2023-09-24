export function htmlTagRemover (str: string) {
    return (str).replace(/(<([^>]+)>)/gi, "")
}

export function convertTimestamp(timestamp: any) {
	let date = timestamp.toDate();
	let mm = date.toLocaleString('default', { month: 'short' }) ;
	let dd = date.getDate();
    let EE = date.getDate();
	let yyyy = date.getFullYear();

	date = mm + ' ' + dd + ', ' + yyyy;
	return date;
}