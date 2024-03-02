export let isOnline;

// Function to update isOnline status
export function updateOnlineStatus(status: boolean) {
	isOnline = status;
}
export function getOnlineStatus() {
	return isOnline;
}
