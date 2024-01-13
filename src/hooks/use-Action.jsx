function useAction() {
  function addNode(tree, id, comment) {
    if (tree.id === id) {
      tree.items.unshift({
        id: new Date().getTime(),
        comment: comment,
        like: 0,
        dislike: 0,
        items: [],
      });
      return tree;
    }
    let newTree = tree.items.map((item) => {
      return addNode(item, id, comment);
    });

    return { ...tree, items: newTree };
  }

  function deleteNode(tree, id) {
    if (tree.id === id) {
      return null;
    }
    let newTree = tree.items.map((item) => {
      return deleteNode(item, id);
    });
    newTree = newTree.filter((item) => item !== null);
    return { ...tree, items: newTree };
  }

  return { addNode, deleteNode };
}

export default useAction;
