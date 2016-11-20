function degreesToRadians(degrees) {
    return (degrees * Math.PI) / 180.0;
}

function radiansToDegrees(radians) {
    return (radians * 180.0) / Math.PI;
}


function normalizeWithBound(number, max) {
    return number - (max * (Math.floor(number / max)))
}


function unwindAngle(angle) {
    return normalizeWithBound(angle, 360.0);
}

function closestAngle(angle) {
    if (angle >= -180 && angle <= 180) {
        return angle;
    }

    return angle - (360 * Math.round(angle/360));
}
