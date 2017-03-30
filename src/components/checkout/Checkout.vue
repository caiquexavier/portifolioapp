<template>
  <div class="checkoutView">
    <div class="modal fade" id="checkoutModal" tabindex="-1" role="dialog" aria-labelledby="checkoutModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content modal-custom">
          <div class="modal-header modal-header-custom">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
            <h1 class="modal-title" id="checkoutModalLabel">{{title}}</h1>

          </div>
          <div class="modal-body">
            <h1>My Modal</h1>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default{
  name: 'checkoutView',
  data () {
    return {
      title: 'Modal '
    }
  }

}
</script>

<style>
.modal-custom{
  background: #D9D9D9;
  color: #313131;
}
.modal-header-custom{
  background: #313131;
  color: #D9D9D9;
  border-radius: 5px;
}
</style>
