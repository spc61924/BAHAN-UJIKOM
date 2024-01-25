@php
$Tanggal = new \App\Helpers\Tanggal; //panggil no static function

@endphp
<table>
    <tbody>
        <tr>
            <td colspan="9" style="font-weight:bold;text-align:center">DATA PENGGUNA</td>
        </tr>
        <tr>
            <td colspan="9" style="font-weight:bold;text-align:center">Waktu Export : {{date('d-m-Y H:i')}}</td>
        </tr>
    </tbody>
</table>
<table>
    <thead>
    <tr>
        <th style="font-weight:bold;text-align:center;background:#f4f4f4;border:1px solid #000000;">No</th> <!-- kolom A -->
        <th style="font-weight:bold;text-align:center;background:#f4f4f4;border:1px solid #000000;">Nama</th> <!-- kolom B -->
        <th style="font-weight:bold;text-align:center;background:#f4f4f4;border:1px solid #000000;">Email</th> <!-- kolom C -->
        <th style="font-weight:bold;text-align:center;background:#f4f4f4;border:1px solid #000000;">Hak Akses</th> <!-- kolom D -->
        <th style="font-weight:bold;text-align:center;background:#f4f4f4;border:1px solid #000000;">Waktu Input</th> <!-- kolom E -->
    </tr>
    </thead>
    <tbody>
    @php $no=1; @endphp
    @if(count($data))
    @foreach($data as $dt)
        {{-- @php
        $dbKategori=DB::table('tm_kategoribarang')->select('*')->where('id','=',$dt->kategori_id)->first();
        @endphp --}}
        <tr>
            <td>{{$no++}}</td>
            <td>{{$dt->name??''}}</td>
            <td>{{$dt->email??''}}</td>
            <td>{{$dt->namerole??''}}</td>
            <td>{{isset($dt->created_at)?$Tanggal->inddatetime($dt->created_at??'',' '):''}}</td>
        </tr>
    @endforeach
    @endif
    </tbody>
</table>
