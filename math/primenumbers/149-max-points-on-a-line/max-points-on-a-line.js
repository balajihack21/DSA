/**
 * @param {number[][]} points
 * @return {number}
 */
var maxPoints = function(points) {
        const n = points.length;
    if (n === 1) return 1;

    let result = 0;

    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            let count = 2;

            const dx = points[j][0] - points[i][0];
            const dy = points[j][1] - points[i][1];

            for (let k = 0; k < n; k++) {
                if (k !== i && k !== j) {
                    const dx_ = points[k][0] - points[i][0];
                    const dy_ = points[k][1] - points[i][1];

                    if (dx_ * dy === dy_ * dx) {
                        count++;
                    }
                }
            }

            result = Math.max(result, count);
        }
    }

    return result;
};