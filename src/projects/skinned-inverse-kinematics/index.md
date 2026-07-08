---
layout: post.njk
title: Skinned Inverse Kinematics
order: 1
startDate:
endDate: 2026-04-01
skills: [C++, OpenGL, Animation]
links:
  - label: GitHub
    url: https://github.com/NotSuspicious/SkinnedIK
cover: media/SkinnedIK_preview_3.gif
description: Forward and Inverse Kinematics with a skinning implementation.
---
## Description
- Implemented Inverse Kinematics, using adolc to estimate the formula.
- Implemented Forward Kinematics.
- Implemented Skinning, which deforms in real time to the bone control points moving.

<div class="media-grid">
<iframe src="https://www.youtube.com/embed/rDRw5ieKf8I" style="aspect-ratio: 1 / 1;" title="Skinned IK Demo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## Features
- Dynamic ADOLC iterations:
    - The number of iterations of the IK estimation depends on the average handle error.
    - If the expected handle position is far away from the actual handle position, the error rate is high and the number of iterations increases.
- Tunable Damped IK (Tikhonov Regularization):
    - Implemented adjustable damping parameter for IK solver regularization.
    - Keyboard controls:
        - D: Increase damping (x1.5) - for smoother, more stable motion
        - F: Decrease damping (÷1.5) - for faster, more responsive motion
        - G: Toggle damping value display in console
    - Default damping: 1e-3 (good balance for most scenarios)
- FK Joint Manipulation (Forward Kinematics Direct Control):
    - Allow direct manipulation of joint rotations without IK constraints.
    - Keyboard controls:
        - K: Toggle FK manipulation mode on/off (default: IK mode)
        - =: Select next joint (cycles through all joints)
        - X: Rotate selected joint around X-axis
        - Y: Rotate selected joint around Y-axis
        - Z: Rotate selected joint around Z-axis
    - Mouse control: Drag vertically while in FK mode to rotate the selected joint around the chosen axis
- Recording
    - P to start recording
    - P to stop recording
