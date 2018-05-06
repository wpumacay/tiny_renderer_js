
/// <reference path="../../core/geometry/LBaseGeometry.ts" />



namespace engine3d
{

    export class LGeometry3d extends core.LBaseGeometry
    {

        constructor( vertices : core.LVec3[],
                     normals : core.LVec3[],
                     texCoords : core.LVec2[],
                     indices : core.LInd3[] )
        {
            super();

            // Create vbos
            // Layout : 
            // attribute 0 -> vertices - here
            // attribute 1 -> normals - here
            // attribute 2 -> texture coords - here, but can be changed ( values )
            // console.log( vertices );
            this.addVbo( 3, core.LVec3.arrayToBuffer( vertices ), 0 );
            this.addVbo( 3, core.LVec3.arrayToBuffer( normals ), 1 );
            this.addVbo( 2, core.LVec2.arrayToBuffer( texCoords ), 2 );

            // Create ibo
            this.setIbo( indices.length * 3, core.LInd3.arrayToBuffer( indices ) );
        }

        
    }



}