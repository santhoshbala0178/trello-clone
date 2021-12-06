type cardsOrderActionType = {
    type: string,
    source: number,
    destination: number,
    sourceDroppableId?: string,
    destinationDroppableId?: string,
}

export default cardsOrderActionType;
