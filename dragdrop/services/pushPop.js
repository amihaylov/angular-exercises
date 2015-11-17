angular.module("dragDrop").factory("PushPopService", function () {
    return {
        pushPop : function (destination, source, index, toSort) {
            if (toSort) {
                for (var i=0; i<destination.length; i++) {
                    if (destination[i].label > source[index].label) {
                        destination.splice(i, 0, source[index]);
                        break;
                    }
                    if ((i + 1) === destination.length) {
                        destination.push(source[index]);
                        break;
                    }
                }
                if (destination.length === 0) {
                    destination.push(source[index]);
                }
            } else {
                destination.push(source[index]);
            }
            source.splice(index,1);
        }
    }
});