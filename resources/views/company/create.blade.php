


<h1>123</h1>
<form method="post" action="{{ route('company.store') }}" enctype="multipart/form-data">
    @csrf
    <div class="form-group">
        <label for="name">Компании</label>
        <input type="text" name="name" id="name" class="form-control"/>

    </div>


    <br/>
    <button type="submit" class="btn btn-success">Cохранить</button>
</form>
