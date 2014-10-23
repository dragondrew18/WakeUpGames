//Ejemplo de bala proyectil

var shotsound:AudioClip;
var shellPrefab : GameObject;
var proyectilevelocity:int;
var ammo:int;
var fireRate = 1.0;
private var nextfire = 0.0;
function FixedUpdate () {
    if(Input.GetButton("Fire1") && Time.time>nextfire && ammo>0)
        ShotProyectile();
}
function ShotProyectile(){
        if(Time.time > nextfire)
        {
    var Grenade:GameObject = Instantiate(shellPrefab,transform.position,transform.rotation);
    Grenade.GetComponentInChildren(Rigidbody).velocity =transform.TransformDirection(Vector3(0,0,proyectilevelocity));
    //Physics.IgnoreCollision(shellPrefab.GetComponentInChildren(BoxCollider).collider,transform.parent.collider);
    ammo--;
    if(shotsound)
        audio.PlayOneShot(shotsound);
    Destroy(Grenade,10);
    nextfire = Time.time+fireRate;}
}